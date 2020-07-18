import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import React from "react";
import HomePage from "../screens/HomePage"
import LearnPage from "../screens/LearnPage";
import CertificatesPage from "../screens/CertificatesPage";
import LearningModulesPage from "../screens/LearningModulesPage";
import ProgressPage from "../screens/ProgressPage";

const Stack = createStackNavigator();

const options = {
    headerStyle: {
        backgroundColor: 'lavendar',
    }
  }

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{headerTitle: "Home"}}
            />
            <Stack.Screen
                name="LearnPage"
                component={LearnPage}
                options={{headerTitle: "Learn"}}
            />
            <Stack.Screen
                name="LearningModulesPage"
                component={LearningModulesPage}
                options={{headerTitle: "Modules"}}
            />
            <Stack.Screen
                name="ProgressPage"
                component={ProgressPage}
                options={{headerTitle: "Progress"}}
            />
            <Stack.Screen
                name="CertificatesPage"
                component={CertificatesPage}
                options={{headerTitle: "Certificates"}}
            />

        </Stack.Navigator>
    );
}

export default HomeStack;
