import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'rn-google-pay-button-only' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type RnGooglePayButtonOnlyProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RnGooglePayButtonOnlyView';

export const RnGooglePayButtonOnlyView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RnGooglePayButtonOnlyProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
