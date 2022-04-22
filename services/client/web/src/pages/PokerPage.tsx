import React from "react";
import { useLocation } from "react-router-dom";
import IIssues from './../interfaces/IIssues';

const PockerPage = () => {

    const [issueNumber, setIssueNumber] = React.useState<number>(0);
    const [issueList, setIssueList] = React.useState<IIssues[]>([]);
    const [answer, setAnswer] = React.useState<number>(null);

    const location = useLocation();

    const answerUser = (answer: number) => {
        setAnswer(answer);
    }

    React.useEffect(() => {
        setIssueList(location.state['data']);
    }, [false]);

    return (
        <React.Fragment>
            <div>
                {issueList.length > 0 &&
                    <div>
                        <h4>{issueList[issueNumber].issue}</h4>
                    </div>
                }
            </div>
            <div>
                <div>
                    <p>Choisissez une option</p>
                </div>
                <div>
                    <div onClick={() => answerUser(1)}>1</div>
                    <div onClick={() => answerUser(2)}>2</div>
                    <div onClick={() => answerUser(3)}>3</div>
                    <div onClick={() => answerUser(5)}>5</div>
                    <div onClick={() => answerUser(8)}>8</div>
                    <div onClick={() => answerUser(13)}>13</div>
                    <div onClick={() => answerUser(21)}>21</div>
                    <div onClick={() => answerUser(34)}>34</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PockerPage;