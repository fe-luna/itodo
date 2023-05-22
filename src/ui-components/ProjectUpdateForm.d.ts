/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Project } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectUpdateFormInputValues = {
    uid?: string;
    proName?: string;
    subProject?: string[];
};
export declare type ProjectUpdateFormValidationValues = {
    uid?: ValidationFunction<string>;
    proName?: ValidationFunction<string>;
    subProject?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectUpdateFormOverridesProps = {
    ProjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uid?: PrimitiveOverrideProps<TextFieldProps>;
    proName?: PrimitiveOverrideProps<TextFieldProps>;
    subProject?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    project?: Project;
    onSubmit?: (fields: ProjectUpdateFormInputValues) => ProjectUpdateFormInputValues;
    onSuccess?: (fields: ProjectUpdateFormInputValues) => void;
    onError?: (fields: ProjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectUpdateFormInputValues) => ProjectUpdateFormInputValues;
    onValidate?: ProjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectUpdateForm(props: ProjectUpdateFormProps): React.ReactElement;
