import { Button, Form, Input,  Upload,} from 'antd';


export const CutomAntdInput = ({name,placeholder}) => {
    return (
        <Form.Item
            name={name}
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input placeholder={placeholder}/>
        </Form.Item>
    )
}