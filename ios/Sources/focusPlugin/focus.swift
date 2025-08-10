import Foundation

@objc public class focus: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
