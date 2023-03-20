
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from 'react'
//import CheckBox from 'expo-checkbox';
import { CheckBox } from '@rneui/themed';

import { styles } from "./style";

type Props = {
    name: string;
    onRemove: () => void;
}

export function Task({ name, onRemove }: Props) {

    const [checked, setChecked] = useState(false)
/*     const [kel, setKel] = useState<number>(0) */

   

    return (

        <View style={styles.container}>

            <CheckBox
                center
                title={name}
                style={styles.check}
                checkedIcon="check-circle"
                uncheckedIcon="circle-o"
                checked={checked}                
                onPress={() => setChecked(!checked)}
                
            />

            {/* <CheckBox style={styles.check}
                value={checked}
                onValueChange={setChecked}
            /> */}
            <Text style={styles.name}>
                {name} 
            </Text>

            {/* <Text style={styles.name}>
                {kel} 
            </Text> */}

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


