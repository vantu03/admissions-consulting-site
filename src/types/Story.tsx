import avatar_1 from '../static/avatars/avatar_1.png'
import avatar_2 from '../static/avatars/avatar_2.png'
import avatar_3 from '../static/avatars/avatar_3.png'
import avatar_4 from '../static/avatars/avatar_4.png'


export interface Story {
    name: string
    avatar: string
    universities: string
    message: string
}


  export const stories: Story[] = [
      {
          name: "Michael Lin",
          avatar: avatar_1,
          universities: "Harvard University",
          message: `"Thank you for posting what you post. You were part of the reason why I got in."`
      },
      {
          name: "Shubh Jain",
          avatar: avatar_2,
          universities: "Stanford, Princeton, Columbia, UC Berkeley",
          message: `"I've been following you since you had 3k followers. I just got into Princeton, Columbia, Stanford, UC Berkeley from India."`
      },
      {
          name: "Osama Radi",
          avatar: avatar_3,
          universities: "Yale University (Full Scholarship)",
          message: `"Your videos helped me tons during the admissions process. First from Saudi Arabia to Yale in 3 years!"`
      },
      {
          name: "Azmain Harun",
          avatar: avatar_4,
          universities: "Vanderbilt University",
          message: `"I got into Vanderbilt. Thanks for your help. You helped me a lot!"`
      }
  ]
