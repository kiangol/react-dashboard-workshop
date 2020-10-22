import React from 'react';

import Widget from './Widget';

import { subjects } from '../data';

const Assignments = () => {
  
  const [activeTab, setActiveTab] = React.useState(0);


  const updateActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const isSubjectApproved = () => {
    // Oppgave 5.5:
    // Implementer denne metoden som returnerer true eller
    // false avhengig om faget er bestått eller ikke
    const currentSubject = subjects[activeTab];
    const approvedAssignments = currentSubject.assignments.filter(assignment => assignment.approved)
    return approvedAssignments.length >= currentSubject.mandatoryApprovals;
  };

  return (
    <Widget title="Mine øvinger">
      <div className="tabs">
        {
          subjects.map((subject: any, index: number) => (
            <button className={index === activeTab? 'activeTab' : ''} key={index} onClick={() => updateActiveTab(index)}>
              {subject.name}
            </button>
          ))
        }
      </div>
      <div className="subjectStatus">
        {
            isSubjectApproved() ? 'Du er ferdig!' : 'Du er ikke helt i mål enda...'
        }
      </div>
      <ul>
        {
          subjects[activeTab].assignments.map((assignment: any, index: number) => (
            <li className={assignment.approved? 'approvedAssignment' : ''} key={index}>
              {assignment.name}
            </li>
          ))
        }
      </ul>
    </Widget>
  );
}

export default(Assignments);
