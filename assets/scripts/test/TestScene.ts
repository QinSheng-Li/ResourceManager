import Test from "./Test";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TestScene extends Test {
    onTest() {
        super.onTest()
        const Resource = this.resource
        if (this.testFlag) {
            Resource.loadScene("test", (err, scene: cc.Scene) => {

            })
            //cc.director.loadScene("test")
        } else {
            Resource.loadScene("entry")
        }
    }
}
