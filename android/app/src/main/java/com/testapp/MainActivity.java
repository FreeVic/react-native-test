package com.testapp;

import android.app.Application;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "testapp";
    }

    @Override
    protected void onResume() {
        super.onResume();
        Application application = getApplication();
        if(application instanceof MainApplication){
            MainApplication myApp = (MainApplication) application;
            if(myApp.getmReactPackage().getmModule()!=null)
            myApp.getmReactPackage().getmModule().nativeCallRN();
        }
    }
}
