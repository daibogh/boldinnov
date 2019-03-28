import * as React from 'react';
import '../../../css/App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import main_theme from "../main_theme";
import quiz_choose from "../../components/quiz_choose";
import begin_stage from "../../components/begin_stage";
import question_block from "../../components/question_block";
import answer_block from "../../components/answer_block";
import total_block from "../../components/total_block";
import map_block from '../../components/map_block';
import QuizWrapper from "../QuizWrapper"

class App extends React.Component {

  render() {
    
    return (<>

      <CssBaseline />
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={() => (<QuizWrapper data={main_theme}></QuizWrapper>)}/>
            <Route exact path="/quiz/" component={() => (<QuizWrapper data={quiz_choose}></QuizWrapper>)}/>
            <Route exact path="/quiz/:id" component = {() => (<QuizWrapper data={begin_stage}></QuizWrapper>)}/>
            <Route exact path="/quiz/:id/question/" component={() => (<QuizWrapper data={question_block}></QuizWrapper>)}/>
            <Route exact path="/quiz/:id/answer/" component={() => (<QuizWrapper data={answer_block}></QuizWrapper>)}/>
            <Route exact path="/quiz/:id/total/" component={() => (<QuizWrapper data={total_block}></QuizWrapper>)}/>
            <Route exact path="/map/" component={map_block}/>
            {/* <Redirect from="/*" to="/" /> */}
        </Switch>
    </BrowserRouter>
      </>
    );
  }
}

export default App;
