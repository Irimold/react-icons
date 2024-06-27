import { SVGProps } from "react";

type OmittedSVGProps = Omit<SVGProps<SVGSVGElement>, 'xmlns' | 'width' | 'height' | 'viewBox' | 'fill'>

export interface IconProps extends OmittedSVGProps {
    size?: number | string
}