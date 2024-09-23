import { GridRowModesModel, GridRowsProp } from "@mui/x-data-grid";

export interface RootLayoutProps {
    children?: React.ReactNode;
    params: { 
        locale?: string; 
    }
}

export interface FormDataInterface {
    email: string;
    password: string;
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface DashboardThemeProps {
    children?: React.ReactNode;
    locale?: string;
}

export interface DashboardProps { }

export interface SettingsProps { }

export interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}

export interface ButtonStartProps {
    onClickFn: Function;
}

export interface ITrainingData {
    exercise: string;
    sets: number;
    repetitions: number;
}

export interface TrainingTwoFormProps {
    trainingData: Array<ITrainingData>;
}
