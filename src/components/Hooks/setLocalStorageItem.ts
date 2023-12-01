import _ from 'lodash'

export const setLocalStorageItem = (key:string, value:string) => {
	if (typeof window !== 'undefined') {
		if (key) {
			const data = window.localStorage.getItem(key)

			if (_.isNil(data)) {
				if (_.isUndefined(value)) {
					window.localStorage.setItem(key, '')

					return null
				}

				window.localStorage.setItem(key, JSON.stringify(value))
			}

			window.localStorage.setItem(key, JSON.stringify(value))

			const event = new StorageEvent('storage', {
				bubbles: true,
				cancelable: false,
				key: key,
				oldValue: data,
				newValue: JSON.stringify(value)
			})

			window.dispatchEvent(event)
		}

		return null
	}

	return null
}