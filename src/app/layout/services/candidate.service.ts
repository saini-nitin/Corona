import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Candidates } from '../candidate/model/Candidates';
import { CandidateStatus } from '../candidate/model/CandidateStatus';
import { Candidate } from '../candidate/model/Candidate';
import { CandidateIntervieModel } from '../candidate/model/CandidateInterviewModel';


@Injectable({ providedIn: 'root' })
export class CandidateService {

    constructor(
        //private messageService: StorageService,
        private http: HttpClient,
        private router: Router) { }

    getCandidates(): Observable<Candidates> { 
        const uri  = 'http://localhost:8301/cis/candidate/all';
        return this.http.get<Candidates>(uri);
    }
    createCandidate(candidate): Observable<Candidate> { 
        const uri  = 'http://localhost:8301/cis/candidate/create-candidate';
        // this.http.post<Candidate>(uri, candidate).subscribe(
        //   res => res,
        // );
        return this.http.post<Candidate>(uri,candidate);
    }

    createCandidateInterview(candidateInterview): Observable<Candidate> { 
        const uri  = 'http://localhost:8301/cis/candidate/create-candidate-interview';
        return this.http.post<Candidate>(uri,candidateInterview);
    }


    getCandidatesCurrentStatusValues(): Observable<CandidateStatus> { 
        const uri  = 'http://localhost:8300/cis/constants/candidateCurrentStatus';
        return this.http.get<CandidateStatus>(uri);
    }

    getCandidateDetails(id): Observable<Candidate> { 
        const uri  = 'http://localhost:8301/cis/candidate/'+id;
        return this.http.get<Candidate>(uri);
    }

    updateCandidateDetails(candidate): Observable<Candidate> { 
        const uri  = 'http://localhost:8301/cis/candidate/update';
        return this.http.put<Candidate>(uri,candidate);
    }
}