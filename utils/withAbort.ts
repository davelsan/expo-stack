/**
 * Convenience function to execute a callback function if the controller has
 * not received an abort signal.
 * @param cb callback function
 * @param abortController `AbortController` object
 */
export function withAbort(cb: () => void, abortController: AbortController) {
  if (abortController.signal.aborted) return;
  cb();
}
