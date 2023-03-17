import { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

import { usePortal } from 'hooks'

import { PortalProps } from 'types'

export const Portal: FC<PropsWithChildren<PortalProps>> = ({
	children,
	id
}) => {
	const container = usePortal(id)
	return container ? createPortal(children, container) : null
}
