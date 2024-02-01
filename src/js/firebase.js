import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	///	this is empty due to secure our database!///
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
