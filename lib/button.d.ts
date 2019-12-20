import { FunctionComponent, ReactNode } from "react";
export interface ButtonProps {
    children?: ReactNode;
    type?: string;
    disabled?: boolean;
    onClick?(): void;
}
export declare const Button: FunctionComponent<ButtonProps>;
