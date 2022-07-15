import { ref } from 'vue'
import { projectAuth } from '@/Firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_user => {
    console.log('User State Change. Current user is:', _user);
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser