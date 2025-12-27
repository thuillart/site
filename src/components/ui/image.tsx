import { Image as ImagePrimitive, type ImageProps } from "@unpic/react";

export function Image({ ...props }: ImageProps) {
	return <ImagePrimitive {...props} cdn="vercel"  />;
}
