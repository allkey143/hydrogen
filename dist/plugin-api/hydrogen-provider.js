"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = __importDefault(require("../store"));
const code_manager_1 = require("../code-manager");
class HydrogenProvider {
    constructor(emitter) {
        this._emitter = emitter;
    }
    onDidChangeKernel(callback) {
        this._emitter.on("did-change-kernel", (kernel) => {
            if (kernel) {
                return callback(kernel.getPluginWrapper());
            }
            return callback(null);
        });
    }
    getActiveKernel() {
        if (!store_1.default.kernel) {
            const grammar = store_1.default.editor ? store_1.default.editor.getGrammar().name : "";
            throw new Error(`No running kernel for grammar \`${grammar}\` found`);
        }
        return store_1.default.kernel.getPluginWrapper();
    }
    getCellRange(editor) {
        if (!store_1.default.editor) {
            return null;
        }
        return (0, code_manager_1.getCurrentCell)(store_1.default.editor);
    }
}
exports.default = HydrogenProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlkcm9nZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcGx1Z2luLWFwaS9oeWRyb2dlbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHFEQUE2QjtBQUU3QixrREFBaUQ7QUFhakQsTUFBcUIsZ0JBQWdCO0lBRW5DLFlBQVksT0FBcUQ7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQU1ELGlCQUFpQixDQUFDLFFBQXNDO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUNkLG1CQUFtQixFQUNuQixDQUFDLE1BQWlDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2FBQzVDO1lBRUQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBTUQsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sT0FBTyxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbkUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsT0FBTyxVQUFVLENBQUMsQ0FBQztTQUN2RTtRQUVELE9BQU8sZUFBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFPRCxZQUFZLENBQUMsTUFBcUM7UUFDaEQsSUFBSSxDQUFDLGVBQUssQ0FBQyxNQUFNLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBQSw2QkFBYyxFQUFDLGVBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBSUY7QUFsREQsbUNBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEVkaXRvciwgUmFuZ2UsIEVtaXR0ZXIgfSBmcm9tIFwiYXRvbVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IHR5cGUgS2VybmVsIGZyb20gXCIuLi9rZXJuZWxcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRDZWxsIH0gZnJvbSBcIi4uL2NvZGUtbWFuYWdlclwiO1xuLyoqXG4gKiBAdmVyc2lvbiAxLjAuMCBUaGUgUGx1Z2luIEFQSSBhbGxvd3MgeW91IHRvIG1ha2UgSHlkcm9nZW4gYXdlc29tZS4gWW91IHdpbGxcbiAqICAgYmUgYWJsZSB0byBpbnRlcmFjdCB3aXRoIHRoaXMgY2xhc3MgaW4geW91ciBIeWRyb2dlbiBQbHVnaW4gdXNpbmcgQXRvbSdzXG4gKiAgIFtTZXJ2aWNlIEFQSV0oaHR0cDovL2Jsb2cuYXRvbS5pby8yMDE1LzAzLzI1L25ldy1zZXJ2aWNlcy1BUEkuaHRtbCkuXG4gKlxuICogICBUYWtlIGEgbG9vayBhdCBvdXIgW0V4YW1wbGVcbiAqICAgUGx1Z2luXShodHRwczovL2dpdGh1Yi5jb20vbGdlaWdlci9oeWRyb2dlbi1leGFtcGxlLXBsdWdpbikgYW5kIHRoZSBbQXRvbVxuICogICBGbGlnaHQgTWFudWFsXShodHRwOi8vZmxpZ2h0LW1hbnVhbC5hdG9tLmlvL2hhY2tpbmctYXRvbS8pIGZvciBsZWFybmluZyBob3dcbiAqICAgdG8gaW50ZXJhY3Qgd2l0aCBIeWRyb2dlbiBpbiB5b3VyIG93biBwbHVnaW4uXG4gKiBAY2xhc3MgSHlkcm9nZW5Qcm92aWRlclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5ZHJvZ2VuUHJvdmlkZXIge1xuICBwcml2YXRlIF9lbWl0dGVyOiBFbWl0dGVyPHt9LCB7IFwiZGlkLWNoYW5nZS1rZXJuZWxcIjogS2VybmVsIH0+IHwgdW5kZWZpbmVkO1xuICBjb25zdHJ1Y3RvcihlbWl0dGVyOiBFbWl0dGVyPHt9LCB7IFwiZGlkLWNoYW5nZS1rZXJuZWxcIjogS2VybmVsIH0+KSB7XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXI7XG4gIH1cblxuICAvKlxuICAgKiBDYWxscyB5b3VyIGNhbGxiYWNrIHdoZW4gdGhlIGtlcm5lbCBoYXMgY2hhbmdlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gQ2FsbGJhY2tcbiAgICovXG4gIG9uRGlkQ2hhbmdlS2VybmVsKGNhbGxiYWNrOiAoLi4uYXJnczogQXJyYXk8YW55PikgPT4gYW55KSB7XG4gICAgdGhpcy5fZW1pdHRlci5vbihcbiAgICAgIFwiZGlkLWNoYW5nZS1rZXJuZWxcIixcbiAgICAgIChrZXJuZWw6IEtlcm5lbCB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgaWYgKGtlcm5lbCkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhrZXJuZWwuZ2V0UGx1Z2luV3JhcHBlcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLypcbiAgICogR2V0IHRoZSBgSHlkcm9nZW5LZXJuZWxgIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRleHQgZWRpdG9yLlxuICAgKiBAcmV0dXJuIHtDbGFzc30gYEh5ZHJvZ2VuS2VybmVsYFxuICAgKi9cbiAgZ2V0QWN0aXZlS2VybmVsKCkge1xuICAgIGlmICghc3RvcmUua2VybmVsKSB7XG4gICAgICBjb25zdCBncmFtbWFyID0gc3RvcmUuZWRpdG9yID8gc3RvcmUuZWRpdG9yLmdldEdyYW1tYXIoKS5uYW1lIDogXCJcIjtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gcnVubmluZyBrZXJuZWwgZm9yIGdyYW1tYXIgXFxgJHtncmFtbWFyfVxcYCBmb3VuZGApO1xuICAgIH1cblxuICAgIHJldHVybiBzdG9yZS5rZXJuZWwuZ2V0UGx1Z2luV3JhcHBlcigpO1xuICB9XG5cbiAgLypcbiAgICogR2V0IHRoZSBgUmFuZ2VgIHRoYXQgd2lsbCBydW4gaWYgYGh5ZHJvZ2VuOnJ1bi1jZWxsYCBpcyBjYWxsZWQuXG4gICAqIGBudWxsYCBpcyByZXR1cm5lZCBpZiBubyBhY3RpdmUgdGV4dCBlZGl0b3IuXG4gICAqIEByZXR1cm4ge0NsYXNzfSBgUmFuZ2VgXG4gICAqL1xuICBnZXRDZWxsUmFuZ2UoZWRpdG9yOiBUZXh0RWRpdG9yIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICghc3RvcmUuZWRpdG9yKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdldEN1cnJlbnRDZWxsKHN0b3JlLmVkaXRvcik7XG4gIH1cbiAgLypcbiAgICotLS0tLS0tLVxuICAgKi9cbn1cbiJdfQ==