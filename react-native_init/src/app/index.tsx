import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const themes = {
  light: {
    background: "#FFFFFF",
    card: "#F4F6FA",
    border: "#D8DEE9",
    text: "#1A1A1A",
    subtext: "#5F6673",
    accent: "#2563EB",
    accentText: "#FFFFFF",
  },
  dark: {
    background: "#111827",
    card: "#1F2937",
    border: "#374151",
    text: "#F9FAFB",
    subtext: "#CBD5E1",
    accent: "#60A5FA",
    accentText: "#111827",
  },
};

type ThemeName = keyof typeof themes;
type Theme = (typeof themes)[ThemeName];

type LessonCardProps = {
  theme: Theme;
  title: string;
  children: React.ReactNode;
};

const LessonCard = ({ theme, title, children }: LessonCardProps) => {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.card, borderColor: theme.border },
      ]}
    >
      <Text style={[styles.cardTitle, { color: theme.text }]}>{title}</Text>
      <Text style={[styles.cardBody, { color: theme.subtext }]}>
        {children}
      </Text>
    </View>
  );
};

type ThemeButtonProps = {
  active: boolean;
  label: string;
  theme: Theme;
  onPress: () => void;
};

const ThemeButton = ({ active, label, theme, onPress }: ThemeButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.themeButton,
        {
          backgroundColor: active ? theme.accent : "transparent",
          borderColor: active ? theme.accent : theme.border,
        },
      ]}
    >
      <Text
        style={[
          styles.themeButtonText,
          { color: active ? theme.accentText : theme.text },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const HomeScreen = () => {
  const systemScheme = useColorScheme();
  const [manualTheme, setManualTheme] = useState<ThemeName | null>(null);

  const activeThemeName: ThemeName =
    manualTheme ?? (systemScheme === "dark" ? "dark" : "light");
  const theme = themes[activeThemeName];
  const isDark = activeThemeName === "dark";

  const toggleManualTheme = (value: boolean) => {
    setManualTheme(value ? "dark" : "light");
  };

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} animated />
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: theme.background }]}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.eyebrow, { color: theme.accent }]}>
              React Native Theme Lesson
            </Text>
            <Text style={[styles.title, { color: theme.text }]}>
              Dark Mode and Light Mode
            </Text>
            <Text style={[styles.subtitle, { color: theme.subtext }]}>
              useColorScheme reads the phone theme. State lets you override it
              inside the app.
            </Text>
          </View>

          <View
            style={[
              styles.panel,
              { backgroundColor: theme.card, borderColor: theme.border },
            ]}
          >
            <View style={styles.row}>
              <View>
                <Text style={[styles.label, { color: theme.text }]}>
                  Current theme
                </Text>
                <Text style={[styles.value, { color: theme.subtext }]}>
                  {activeThemeName} mode
                </Text>
              </View>

              <Switch
                value={isDark}
                onValueChange={toggleManualTheme}
                trackColor={{ false: "#CBD5E1", true: theme.accent }}
                thumbColor={isDark ? "#F9FAFB" : "#FFFFFF"}
              />
            </View>

            <View style={styles.buttonRow}>
              <ThemeButton
                active={manualTheme === null}
                label="System"
                theme={theme}
                onPress={() => setManualTheme(null)}
              />
              <ThemeButton
                active={manualTheme === "light"}
                label="Light"
                theme={theme}
                onPress={() => setManualTheme("light")}
              />
              <ThemeButton
                active={manualTheme === "dark"}
                label="Dark"
                theme={theme}
                onPress={() => setManualTheme("dark")}
              />
            </View>
          </View>

          <LessonCard theme={theme} title="1. Detect the system theme">
            useColorScheme returns light, dark, or null. Most apps treat null as
            light mode.
          </LessonCard>

          <LessonCard theme={theme} title="2. Pick colors from one object">
            The screen uses one theme object for background, card, text, border,
            and accent colors.
          </LessonCard>

          <LessonCard theme={theme} title="3. Apply theme colors with arrays">
            Static styles stay in StyleSheet.create. Dynamic colors are added
            with style arrays.
          </LessonCard>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 14,
    padding: 20,
  },
  header: {
    gap: 8,
    marginBottom: 4,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 23,
  },
  panel: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 18,
    padding: 16,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
  },
  value: {
    fontSize: 14,
    marginTop: 4,
    textTransform: "capitalize",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  themeButton: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10,
  },
  themeButtonText: {
    fontSize: 14,
    fontWeight: "700",
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    padding: 16,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "800",
  },
  cardBody: {
    fontSize: 15,
    lineHeight: 22,
  },
});
