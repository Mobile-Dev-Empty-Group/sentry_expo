import { Stack } from "expo-router";
import * as Sentry from '@sentry/react-native';
Sentry.init({
  dsn: "https://6dbaf618bbf4cd125d13d9183ea04457@o4510502727909376.ingest.de.sentry.io/4510502825033808",
  debug: true, // Bật debug để thấy log Sentry trong console khi chạy dev
  tracesSampleRate: 1.0
});
export default function RootLayout() {
  return <Stack />;
}
