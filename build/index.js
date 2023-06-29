/**
 * This serves as the public entrypoint for the Framer module which is published
 * to npm. Currently it contains all the API's that can be used in Smart
 * Components(SC) and Code Components (CM - Modules not legacy).
 *
 * Looking forward this public entrypoint is focused on catering to users using
 * the handshake feature, that is using SC and CM in the wild.
 *
 * NB: this entrypoint must not be used internally in the framer application.
 *
 * NOTE: if you find that a API is missing from this list please don't hesitate
 * to reach out to us!
 *
 * @module
 */
// FIXME: `framer-motion` should be removed in the next major release. When we
// are confident enough that the old Smart Components don't use these exports
// from "framer".
export * from "framer-motion";
export { withMeasuredSize } from "./components/hoc/withMeasuredSize.js";
export { useIsInCurrentNavigationTarget } from "./components/NavigationContainerContext.js";
export { Page } from "./components/Page/EmulatedPage.js";
export { Scroll } from "./components/Scroll/Scroll.js";
export { Stack } from "./components/Stack/Stack.js";
export { cx } from "./modules/cx.js";
export { Link } from "./modules/Link.js";
export { useActiveVariantCallback } from "./modules/useActiveVariantCallback.js";
export { useAddVariantProps } from "./modules/useAddVariantProps.js";
export { useDataRecord } from "./modules/useDataRecord.js";
export { useGamepad } from "./modules/useGamepad.js";
export { useHotkey } from "./modules/useHotkey.js";
export { useNavigate } from "./modules/useNavigate.js";
export { useOnAppear, useOnVariantChange } from "./modules/useOnVariantChange.js";
export { useOverlayState } from "./modules/useOverlayState.js";
export { useSafariGapFix } from "./modules/useSafariGapFix.js";
export { CycleVariantState, useVariantState } from "./modules/useVariantState.js";
export { withCSS } from "./modules/withCSS.js";
export { fontStore } from "./render/fonts/fontStore.js";
export { FrameWithMotion } from "./render/presentation/Frame/FrameWithMotion.js";
export { Image } from "./render/presentation/Image.js";
export { RichText } from "./render/presentation/RichText.js";
export { SVG } from "./render/presentation/SVG.js";
export { Text } from "./render/presentation/Text.js";
export { Vector } from "./render/presentation/Vector.js";
export { VectorGroup } from "./render/presentation/VectorGroup.js";
export { Color } from "./render/types/Color/Color.js";
export { ControlType } from "./render/types/PropertyControls.js";
export { RenderTarget } from "./render/types/RenderEnvironment.js";
export { transformTemplate } from "./render/utils/transformTemplate.js";
export { useRouteAnchor, useRouteHandler } from "./router/index.js";
export { addFonts, getFonts } from "./utils/addFonts.js";
export { addPropertyControls, getPropertyControls } from "./utils/addPropertyControls.js";
/**
 * @public
 * @deprecated `Frame` has been deprecated. Please use `motion.div`
 */
export function Frame() {
    throw new Error("<Frame> has been deprecated. Please use <motion.div>");
}
//# sourceMappingURL=index.js.map