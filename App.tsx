import CustomAlert from "./CustomAlert";
import { useState } from "react";
import { Button, View } from "react-native";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => setIsVisible(true)} title="Press Me" />
      <CustomAlert
        messageStyle={{ textAlign: "center" }}
        titleStyle={{
          // color:'white',
          // textAlign: "center",
          // fontSize: 28,
          letterSpacing: 1,
        }}
        alertContainerStyle={
          {
            // backgroundColor:'black',
          }
        }
        message="Are you sure you want to close this application?"
        title="Exit Confirmation"
        onOkPress={() => setIsVisible(false)}
        onCancelPress={() => console.log("cancel pressed")}
        okButtonStyle={
          {
            // backgroundColor: "#fbc309",
          }
        }
        okButtonText="Yes"
        cancelButtonText="No"
        visible={isVisible}
      />
    </View>
  );
}

// export default CustomAlert;
