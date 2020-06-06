import * as React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { serviceHomePageStyle } from "../style/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSessionID } from "../../../../shareFuction/sessionId";
export function serviceHomePage({ navigation }) {
  return (
    <SafeAreaView>
      <Icon name="chevron-thin-up" style={serviceHomePageStyle.upIcon}></Icon>
      <Text
        style={serviceHomePageStyle.goBack}
        onPress={() => {
          navigation.goBack();
        }}
      >
        Go back
      </Text>
      <Text style={serviceHomePageStyle.Text}>
        Choose the service that you need at the moment
      </Text>
      <ScrollView>
        <View style={serviceHomePageStyle.rectRow}>
          <TouchableOpacity
            onPress={async () =>
              (await getSessionID("sid"))
                ? navigation.navigate("welcomePage")
                : navigation.navigate("welcomePage")
            }
          >
            <View style={serviceHomePageStyle.rect} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () =>
              (await getSessionID("sid"))
                ? navigation.navigate("welcomePage")
                : navigation.navigate("welcomePage")
            }
          >
            <View style={serviceHomePageStyle.rect} />
          </TouchableOpacity>
        </View>
        <View style={serviceHomePageStyle.rectRow}>
          <TouchableOpacity
            onPress={async () =>
              (await getSessionID("sid"))
                ? navigation.navigate("welcomePage")
                : navigation.navigate("welcomePage")
            }
          >
            <View style={serviceHomePageStyle.rect} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () =>
              (await getSessionID("sid"))
                ? navigation.navigate("welcomePage")
                : navigation.navigate("welcomePage")
            }
          >
            <View style={serviceHomePageStyle.rect} />
          </TouchableOpacity>
        </View>
        <View style={serviceHomePageStyle.rectRow}>
          <TouchableOpacity
            onPress={async () =>
              (await getSessionID("sid"))
                ? navigation.navigate("welcomePage")
                : navigation.navigate("welcomePage")
            }
          >
            <View style={serviceHomePageStyle.rect} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () =>
              (await getSessionID("sid"))
                ? navigation.navigate("welcomePage")
                : navigation.navigate("welcomePage")
            }
          >
            <View style={serviceHomePageStyle.rect} />
          </TouchableOpacity>
        </View>
        <View style={serviceHomePageStyle.rectRow}>
          <TouchableOpacity
            onPress={async () =>
              (await getSessionID("sid"))
                ? navigation.navigate("welcomePage")
                : navigation.navigate("welcomePage")
            }
          >
            <View style={serviceHomePageStyle.rect} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () =>
              (await getSessionID("sid"))
                ? navigation.navigate("welcomePage")
                : navigation.navigate("welcomePage")
            }
          >
            <View style={serviceHomePageStyle.rect} />
          </TouchableOpacity>
        </View>
        <View style={serviceHomePageStyle.rectRow}>
          <TouchableOpacity
            onPress={async () =>
              (await getSessionID("sid"))
                ? navigation.navigate("welcomePage")
                : navigation.navigate("welcomePage")
            }
          >
            <View style={serviceHomePageStyle.rect} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () =>
              (await getSessionID("sid"))
                ? navigation.navigate("welcomePage")
                : navigation.navigate("welcomePage")
            }
          >
            <View style={serviceHomePageStyle.rect} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
