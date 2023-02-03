import React from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

interface Props {
  title: string;
  message: string;
  onOkPress: () => void;
  onCancelPress?: () => void;
  visible: boolean;
  alertContainerStyle?: object;
  titleStyle?: object;
  messageStyle?: object;
  okButtonStyle?: object;
  cancelButtonStyle?: object;
  okButtonTextStyle?: object;
  cancelButtonTextStyle?: object;
  okButtonText?: string;
  cancelButtonText?: string;
  buttonsContainerStyle?: object;
}

const CustomAlert: React.FC<Props> = ({
  title,
  titleStyle,
  message,
  messageStyle,
  okButtonStyle,
  onOkPress,
  okButtonTextStyle,
  okButtonText,
  onCancelPress,
  visible,
  alertContainerStyle,
  cancelButtonStyle,
  cancelButtonTextStyle,
  cancelButtonText,
  buttonsContainerStyle,
}) => {
  const { height, width } = Dimensions.get("window");

  return (
    <Modal transparent={true} visible={visible}>
      <TouchableWithoutFeedback>
        <View
          style={[
            {
              width: width,
              height: height,
              position: "absolute",
              backgroundColor: "rgba(52,52,52,0.5)",
            },
          ]}
        />
      </TouchableWithoutFeedback>
      <View
        style={[
          {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <View
          style={[
            {
              backgroundColor: "#121212",
              padding: 20,
              borderRadius: 6,
              width: "95%",
            },
            alertContainerStyle,
          ]}
        >
          <Text
            style={[
              {
                marginBottom: 10,
                fontSize: 22,
                fontWeight: "500",
                color: "#fbc309",
                textAlign: "center",
              },
              titleStyle,
            ]}
          >
            {title}
          </Text>
          <Text
            style={[
              {
                marginBottom: 14,
                fontWeight: "300",
                color: "#fbc309",
                textAlign: "center",
                fontSize: 18,
              },
              messageStyle,
            ]}
          >
            {message}
          </Text>
          <View
            style={[
              {
                width: "100%",
                flexDirection: "row",
                justifyContent: cancelButtonText ? "space-between" : "center",
              },
              buttonsContainerStyle,
            ]}
          >
            {cancelButtonText && (
              <Pressable
                onPress={onCancelPress}
                style={[
                  {
                    width: "45%",
                    backgroundColor: "#343434",
                    borderRadius: 12,
                    padding: 12,
                    alignItems: "center",
                  },
                  cancelButtonStyle,
                ]}
              >
                <Text
                  style={[
                    {
                      color: "white",
                      fontSize: 18,
                      fontWeight: "bold",
                      letterSpacing: 0.2,
                    },
                    cancelButtonTextStyle,
                  ]}
                >
                  {cancelButtonText ?? "Cancel"}
                </Text>
              </Pressable>
            )}
            <Pressable
              onPress={onOkPress}
              style={[
                {
                  width: cancelButtonText ? "45%" : "100%",
                  backgroundColor: "green",
                  borderRadius: 12,
                  padding: 12,
                  alignItems: "center",
                },
                okButtonStyle,
              ]}
            >
              <Text
                style={[
                  {
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                    letterSpacing: 0.2,
                  },
                  okButtonTextStyle,
                ]}
              >
                {okButtonText ?? "OK"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
