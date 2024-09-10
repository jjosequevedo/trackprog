interface RootLayoutProps {
    children: React.ReactNode;
    params: { locale: string; }
}

interface FormDataInterface {
    email: string;
    password: string;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
