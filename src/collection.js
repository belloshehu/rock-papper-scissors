import scissors from './images/scissors.png'
import rock from './images/rock.jpg'
import paper from './images/paper.jpg'

const collection = [
    {
        text: "rock",
        subordinate: "scissors",
        image: rock
    },
    {
        text: "paper",
        subordinate: "rock",
        image: paper
    },
    {
        text: "scissors",
        subordinate: "paper",
        image: scissors
    }
]

export default collection