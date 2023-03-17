import { useEffect, useState } from 'react'

export const usePortal = (id: string): Element | null => {
	const [container, setContainer] = useState<Element | null>(null)

	useEffect(() => {
		let mounted = true
		let containerElement = document.getElementById(id)

		if (!containerElement) {
			containerElement = document.createElement('div')
			containerElement.id = id
			document.body.appendChild(containerElement)
		}

		if (mounted) {
			setContainer(containerElement)
		}

		return () => {
			if (
				containerElement &&
				containerElement.parentNode === document.body
			) {
				document.body.removeChild(containerElement)
			}
			mounted = false
			setContainer(null)
		}
	}, [id])

	return container
}
