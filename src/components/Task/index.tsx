
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from 'react'
import CheckBox from 'expo-checkbox';

import { styles } from "./style";

type Props = {
    name: string;
    onRemove: () => void;
}

export function Task({ name, onRemove }: Props) {

    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <CheckBox style={styles.check}
                value={checked}                
                onValueChange={setChecked}
            />
            <Text style={styles.name}>
                {name}
            </Text>
            <View style={styles.div}>
                <TouchableOpacity style={styles.button} onPress={onRemove}>
                    <Text style={styles.buttonText}>
                        -
                    </Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}


