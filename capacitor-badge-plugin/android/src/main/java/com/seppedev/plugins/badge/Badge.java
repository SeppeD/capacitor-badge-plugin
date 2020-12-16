package com.seppedev.plugins.badge;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import me.leolin.shortcutbadger.ShortcutBadger;

@NativePlugin
public class Badge extends Plugin {

    @PluginMethod()
    public void setBadgeCount(PluginCall call) {
        int count = call.getInt("count", 0);
        JSObject jsObject = new JSObject();

        if (ShortcutBadger.isBadgeCounterSupported(getContext())) {
            ShortcutBadger.applyCount(getContext(), count);
            jsObject.put("success", true);
            jsObject.put("value", count);
            call.success(jsObject);
        } else {
            jsObject.put("success", false);
            call.success(jsObject);
        }

    }

    @PluginMethod()
    public void clearBadgeCount(PluginCall call) {
        JSObject jsObject = new JSObject();
        
        if (ShortcutBadger.isBadgeCounterSupported(getContext())) {
            ShortcutBadger.removeCount(getContext());
            jsObject.put("success", true);
            call.success(jsObject);
        } else {
            jsObject.put("success", false);
            call.success(jsObject);
        }
    }

    @PluginMethod()
    public void requestPermission(PluginCall call) {
        JSObject jsObject = new JSObject();
        jsObject.put("success", true);
        call.success(jsObject);
    }

    @PluginMethod()
    public void hasPermission(PluginCall call) {
        JSObject jsObject = new JSObject();
        jsObject.put("success", true);
        call.success(jsObject);
    }
}
