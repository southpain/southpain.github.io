package com.hsf.services.impl;

import com.hsf.services.SayHelloService;
public class SayHelloServiceImpl implements SayHelloService {
      public String sayHello(String user) {
        return "Hello "+user+" ，Time is "+System.currentTimeMillis()+"(ms)";
      }
    }
