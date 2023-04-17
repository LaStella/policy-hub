import { Toggle } from "../../components";

export default {
    title: 'Components/Toggle',
    component: Toggle,
    argTypes: {
        disabled: {control: 'boolean'},
    }
}

export const Default = (args) => {
    return <Toggle {...args} />;
};