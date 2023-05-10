import React from 'react';
import Emoji from '../components/Emoji';
import BackToTop from './BackToTop';

const EmojiList = ({ emojis }) => {


    if (!emojis.length) {
        return (
            <div className='my-5 py-5 bg-light'>

                <div className="container text-center px-5 py-5">
                    <div className="results">
                        <p>No emojis match the query</p>
                    </div>
                </div>
            </div>
        )
    } else {
        

        return (
            <div className='my-5 py-4 bg-light'>

                <div className="container text-center px-5">
                    <article className="results emoji">
                        {
                            emojis.map((emoji, i) => {
                                return <Emoji key={i} id={"emoji" + i} name={emojis[i].slug} code={emojis[i].codePoint} character={emojis[i].character} group={emojis[i].subGroup} unicode={emojis[i].unicodeName} />
                            })
                        }
                    </article>
                </div>
            </div>
        );
    }
}

export default EmojiList