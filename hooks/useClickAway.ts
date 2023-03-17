import { MutableRefObject, useEffect } from 'react'

export type ClickAwayCallBack = (event: MouseEvent) => void

export function useClickAway<T extends HTMLElement>(
	ref: MutableRefObject<T>,
	onClickAway: ClickAwayCallBack
) {
	useEffect(() => {
		const handleClickAway = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClickAway(event)
			}
		}

		document.addEventListener('mousedown', handleClickAway)

		return () => document.removeEventListener('mousedown', handleClickAway)
	}, [ref, onClickAway])
}
