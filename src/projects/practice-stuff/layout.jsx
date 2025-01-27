import React from 'react'
import { moodList } from './data.js'

const layout = () => {

    const groupedMood = moodList.reduce((date, curr) => {
        const key = curr.date;

        if (!date[key]) {
            date[key] = [];
        }
        date[key].push(curr.mood);
        return date;
    }, {});

    console.log(groupedMood);

    const moodFrequency = moodList.reduce((mood, curr) => {
        mood[curr.mood] = (mood[curr.mood] || 0) + 1
        return mood;
    }, {});

    const maxMood = Object.keys(moodFrequency).reduce((max, mood) => {
        return moodFrequency[mood] > moodFrequency[max] ? mood : max;
    }, Object.keys(moodFrequency)[0]);


    //lets filter out 24th jul moods
    const filteredMoods = moodList.filter((item) => item.date !== "24 jul") //item.mood > 4 : to filter out any mood whose length is lass than 4
    .map((item) => item.mood);

    const nums = [1,8,3,2,4,3,2,1,6];
    const uniques = nums.filter((num, index, arr) => arr.indexOf(num) === index)  //indexOf will check the first occ and index is the new array's index
    //filter has tc of n sqaure - very bad 
    const optimizedOniques = [...new Set(nums)]; //o(n)


    return (
        <div className="p-20">
            <p className='font-bold'>Grouped by date</p>
            {Object.keys(groupedMood).map((date) => (
                <div className="flex gap-6" key={date}>
                    <h4>{date}</h4>
                    {groupedMood[date].map((mood) => (
                        <p>{mood}</p>
                    ))}
                </div>
            ))}
            <div>
                <p className='font-bold'>Mapping</p>
                {moodList.map((mood) => (
                    <p>
                        {mood.mood} on {mood.date}
                    </p>
                ))}
            </div>
            <div className='font-bold'>Max mood: {maxMood}</div>
            <div className="gap-2 flex items-center">
                <p className='font-bold'>Filtered out 24th jul's moods:</p>
                {filteredMoods.map((mood, index) => (
                    <p key={index} className="p-2 rounded">
                        {mood}
                    </p>
                ))}
            </div>
            <div className='mt-4'>
              <p className='font-bold'>Array Manipulations</p>
          {uniques}
            </div>
        </div>
    )
}

export default layout
