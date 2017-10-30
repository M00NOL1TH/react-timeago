/// <reference types="react" />

declare module "@mil/react-timeago" {
    export type Unit = "second" | "minute" | "hour" | "day" | "week" | "month" | "year";
    export type Suffix = "ago" | "from now";

    export type Formatter =
        (value: number, unit: Unit, suffix: Suffix, epochSeconds: number, nextFormatter?: Formatter) => string | React.ReactElement<any>;

    export interface TimeAgoProps extends React.HTMLAttributes<TimeAgo> {
        date: Date | string | number;
        live?: boolean;
        formatter?: Formatter;
        component?: React.ReactType;
        title?: string;
        minPeriod?: number;
        maxPeriod?: number;
    }

    export default class TimeAgo extends React.Component<TimeAgoProps, {}> { }
}
