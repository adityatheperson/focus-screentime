package com.focus.aditya;

import com.getcapacitor.Logger;

public class focus {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
