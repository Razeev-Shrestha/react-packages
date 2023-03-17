import { createPortal } from 'react-dom'

import { usePortal } from 'hooks'

import { PortalProps } from 'types'

export function withPortal<T extends PortalProps>(
	Component: React.ComponentType<T>
) {
	return function WrappedComponent({ id, ...props }: T) {
		const container = usePortal(id)
		return container
			? createPortal(<Component {...(props as T)} />, container)
			: null
	}
}
