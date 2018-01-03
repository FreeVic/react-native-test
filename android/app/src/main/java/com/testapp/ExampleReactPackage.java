package com.testapp;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by zhangshengli on 2018/1/3.
 */

public class ExampleReactPackage implements ReactPackage {

    private ToastModule mModule = null;

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> result = new ArrayList<>();
        mModule = new ToastModule(reactContext);
        result.add(mModule);
        return result;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    public ToastModule getmModule() {
        return mModule;
    }

    public void setmModule(ToastModule mModule) {
        this.mModule = mModule;
    }
}
