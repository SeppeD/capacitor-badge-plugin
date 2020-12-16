import Foundation
import Capacitor
import UserNotifications
typealias JSObject = [String:Any]


@objc(Badge)
public class Badge: CAPPlugin {

    @objc func setBadgeCount(_ call: CAPPluginCall) {
        let count = call.getInt("count") ?? 0
        DispatchQueue.main.async {
            UIApplication.shared.applicationIconBadgeNumber = count;
        }
        var object: JSObject = [:]
        object["success"] = true;
        object["value"] = count;
        call.success(object);
    }

    @objc func clearBadgeCount(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            UIApplication.shared.applicationIconBadgeNumber = 0;

            var object: JSObject = [:]
            object["success"] = true;
            call.success(object);
        }
    }


    @objc func requestPermission(_ call: CAPPluginCall) {
        let center =  UNUserNotificationCenter.current()
        center.requestAuthorization(options: [.badge]) { (success, error) in
            var object: JSObject = [:]
            if(error != nil){
                object["success"] = false;
                call.success(object)
            }else{
                object["success"] = true;
                call.success(object)
            }
        }
    }


    @objc func hasPermission(_ call: CAPPluginCall) {
        let center =  UNUserNotificationCenter.current()
        var object: JSObject = [:]
        center.getNotificationSettings { (settings) in
            print(settings.authorizationStatus == .authorized)
            if(settings.authorizationStatus == .authorized){
                object["success"] = true;
                call.success(object)
            }else{
                object["success"] = false;
                call.success(object)
            }
        }
    }
}
