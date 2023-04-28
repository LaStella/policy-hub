import { Input } from "../../components";

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        label: {
            defaultValue: 'Label',
            control: 'text'
        },
        block: {
            defaultValue: false,
            control:'boolean'
        },
        invalid: {
            defaultValue: false,
            control:'boolean'
        },
        required: {
            defaultValue: false,
            control:'boolean'
        },
        disabled: {
            defaultValue: false,
            control:'boolean'
        },
        readonly: {
            defaultValue: false,
            control:'boolean'
        },
    }
}

export const Default = (args) => {
    return <Input placeholder="입력창" {...args} />;
};