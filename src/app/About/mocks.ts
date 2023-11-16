import { ImageSourcePropType } from "react-native";

import dev1 from '../../../assets/desenvolvedoras/ana.png'
import dev2 from '../../../assets/desenvolvedoras/ariane.png'
import dev3 from '../../../assets/desenvolvedoras/gabie.png'

type DevProps = {
    id: number
    url: ImageSourcePropType
    name: string
}

export const devs: DevProps[] = [
    {
        id: 1,
        url: dev1,
        name: 'Ana Clara Duarte Miranda'
    },
    {
        id: 2,
        url: dev2,
        name: 'Ariane Rodokas Barbosa'
    },
    {
        id: 3,
        url: dev3,
        name: 'Gabriela Vitória da Silva'
    }
]