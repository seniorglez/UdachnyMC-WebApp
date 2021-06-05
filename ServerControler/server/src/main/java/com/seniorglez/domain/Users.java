package com.seniorglez.domain;

import com.seniorglez.domain.model.User;
import com.seniorglez.domain.model.UserErrors;

import com.seniorglez.functionalJava.monads.Result;

public interface Users {
    Result< User, UserErrors > getUserByUsername( String username );
}
