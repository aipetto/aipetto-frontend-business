export interface IMapOptions {
    /**
     * Color used for the background of the Map div. This color will be visible
     * when tiles have not yet loaded as the user pans. This option can only be
     * set when the map is initialized.
     */
    backgroundColor?: string|null;
    /**
     * The initial Map center.
     */
    center?: google.maps.LatLng|null|google.maps.LatLngLiteral;
    /**
     * When <code>false</code>, map icons are not clickable. A map icon
     * represents a point of interest, also known as a POI. By default map icons
     * are clickable.
     */
    clickableIcons?: boolean|null;
    /**
     * Size in pixels of the controls appearing on the map. This value must be
     * supplied directly when creating the Map, updating this value later may
     * bring the controls into an <code>undefined</code> state. Only governs the
     * controls made by the Maps API itself. Does not scale developer created
     * custom controls.
     */
    controlSize?: number|null;
    /**
     * Enables/disables all default UI buttons. May be overridden individually.
     * Does not disable the keyboard controls, which are separately controlled
     * by the {@link google.maps.MapOptions.keyboardShortcuts} option. Does not
     * disable gesture controls, which are separately controlled by the {@link
        * google.maps.MapOptions.gestureHandling} option.
     */
    disableDefaultUI?: boolean|null;
    /**
     * Enables/disables zoom and center on double click. Enabled by default.
     * <p><strong>Note</strong>: This property is <strong>not
     * recommended</strong>. To disable zooming on double click, you can use the
     * <code>gestureHandling</code> property, and set it to <code>"none"</code>.
     */
    disableDoubleClickZoom?: boolean|null;
    /**
     * If <code>false</code>, prevents the map from being dragged. Dragging is
     * enabled by default.
     * @deprecated Deprecated in 2017. To disable dragging on the map, you can
     *     use the <code>gestureHandling</code> property, and set it to
     *     <code>"none"</code>.
     */
    draggable?: boolean|null;
    /**
     * The name or url of the cursor to display when mousing over a draggable
     * map. This property uses the css <code>cursor</code> attribute to change
     * the icon. As with the css property, you must specify at least one
     * fallback cursor that is not a URL. For example: <code>draggableCursor:
     * 'url(<a
     * href="http://www.example.com/icon.png">http://www.example.com/icon.png</a>),
     * auto;'</code>.
     */
    draggableCursor?: string|null;
    /**
     * The name or url of the cursor to display when the map is being dragged.
     * This property uses the css <code>cursor</code> attribute to change the
     * icon. As with the css property, you must specify at least one fallback
     * cursor that is not a URL. For example: <code>draggingCursor: 'url(<a
     * href="http://www.example.com/icon.png">http://www.example.com/icon.png</a>),
     * auto;'</code>.
     */
    draggingCursor?: string|null;
    /**
     * The enabled/disabled state of the Fullscreen control.
     */
    fullscreenControl?: boolean|null;
    /**
     * The display options for the Fullscreen control.
     */
    fullscreenControlOptions?: google.maps.FullscreenControlOptions|null;
    /**
     * This setting controls how the API handles gestures on the map. Allowed
     * values: <ul> <li> <code>"cooperative"</code>: Scroll events and
     * one-finger touch gestures scroll the page, and do not zoom or pan the
     * map. Two-finger touch gestures pan and zoom the map. Scroll events with a
     * ctrl key or ⌘ key pressed zoom the map.<br> In this mode the map
     * <em>cooperates</em> with the page. <li> <code>"greedy"</code>: All touch
     * gestures and scroll events pan or zoom the map. <li> <code>"none"</code>:
     * The map cannot be panned or zoomed by user gestures. <li>
     * <code>"auto"</code>: (default) Gesture handling is either cooperative or
     * greedy, depending on whether the page is scrollable or in an iframe.
     * </ul>
     */
    gestureHandling?: string|null;
    /**
     * The heading for aerial imagery in degrees measured clockwise from
     * cardinal direction North. Headings are snapped to the nearest available
     * angle for which imagery is available.
     */
    heading?: number|null;
    /**
     * Available only in the v=beta channel: https://goo.gle/3oAthT3.
     * Whether the map should allow fractional zoom levels. If not explicitly
     * set to <code>true</code> or <code>false</code>, by default vector maps
     * will allow fractional zoom and raster maps will not. Listen to
     * <code>isfractionalzoomenabled_changed</code> to know when the default has
     * been set.
     */
    isFractionalZoomEnabled?: boolean|null;
    /**
     * If <code>false</code>, prevents the map from being controlled by the
     * keyboard. Keyboard shortcuts are enabled by default.
     */
    keyboardShortcuts?: boolean|null;
    /**
     * The unique identifier that represents a single instance of a Google Map.
     * You can create Map IDs and update a style associated with a Map ID at any
     * time in the Google Cloud Console <a
     * href="https://console.cloud.google.com/google/maps-apis/client-maps">Maps
     * Management page</a> without changing embedded JSON styling in your
     * application code.
     */
    mapId?: string|null;
    /**
     * The initial enabled/disabled state of the Map type control.
     */
    mapTypeControl?: boolean|null;
    /**
     * The initial display options for the Map type control.
     */
    mapTypeControlOptions?: google.maps.MapTypeControlOptions|null;
    /**
     * The initial Map mapTypeId. Defaults to <code>ROADMAP</code>.
     */
    mapTypeId?: null|string;
    /**
     * The maximum zoom level which will be displayed on the map. If omitted, or
     * set to <code>null</code>, the maximum zoom from the current map type is
     * used instead. Valid values: Integers between zero, and up to the
     * supported <a
     * href="https://developers.google.com/maps/documentation/javascript/maxzoom">maximum
     * zoom level</a>.
     */
    maxZoom?: number|null;
    /**
     * The minimum zoom level which will be displayed on the map. If omitted, or
     * set to <code>null</code>, the minimum zoom from the current map type is
     * used instead. Valid values: Integers between zero, and up to the
     * supported <a
     * href="https://developers.google.com/maps/documentation/javascript/maxzoom">maximum
     * zoom level</a>.
     */
    minZoom?: number|null;
    /**
     * If <code>true</code>, do not clear the contents of the Map div.
     */
    noClear?: boolean|null;
    /**
     * The enabled/disabled state of the Pan control. <p> Note: The Pan control
     * is not available in the new set of controls introduced in v3.22 of the
     * Google Maps JavaScript API. While using v3.22 and v3.23, you can choose
     * to use the earlier set of controls rather than the new controls, thus
     * making the Pan control available as part of the old control set. See <a
     * href="https://developers.google.com/maps/articles/v322-controls-diff">What&#39;s
     * New in the v3.22 Map Controls</a>.
     */
    panControl?: boolean|null;
    /**
     * The display options for the Pan control. <p> Note: The Pan control is not
     * available in the new set of controls introduced in v3.22 of the Google
     * Maps JavaScript API. While using v3.22 and v3.23, you can choose to use
     * the earlier set of controls rather than the new controls, thus making the
     * Pan control available as part of the old control set. See <a
     * href="https://developers.google.com/maps/articles/v322-controls-diff">What&#39;s
     * New in the v3.22 Map Controls</a>.
     */
    panControlOptions?: google.maps.PanControlOptions|null;
    /**
     * Defines a boundary that restricts the area of the map accessible to
     * users. When set, a user can only pan and zoom while the camera view stays
     * inside the limits of the boundary.
     */
    restriction?: google.maps.MapRestriction|null;
    /**
     * The enabled/disabled state of the Rotate control.
     */
    rotateControl?: boolean|null;
    /**
     * The display options for the Rotate control.
     */
    rotateControlOptions?: google.maps.RotateControlOptions|null;
    /**
     * The initial enabled/disabled state of the Scale control.
     */
    scaleControl?: boolean|null;
    /**
     * The initial display options for the Scale control.
     */
    scaleControlOptions?: google.maps.ScaleControlOptions|null;
    /**
     * If <code>false</code>, disables zooming on the map using a mouse scroll
     * wheel. The scrollwheel is enabled by default. <p><strong>Note</strong>:
     * This property is <strong>not recommended</strong>. To disable zooming
     * using scrollwheel, you can use the <code>gestureHandling</code> property,
     * and set it to either <code>"cooperative"</code> or <code>"none"</code>.
     */
    scrollwheel?: boolean|null;
    /**
     * A <code>StreetViewPanorama</code> to display when the Street View pegman
     * is dropped on the map. If no panorama is specified, a default
     * <code>StreetViewPanorama</code> will be displayed in the map&#39;s
     * <code>div</code> when the pegman is dropped.
     */
    streetView?: google.maps.StreetViewPanorama|null;
    /**
     * The initial enabled/disabled state of the Street View Pegman control.
     * This control is part of the default UI, and should be set to
     * <code>false</code> when displaying a map type on which the Street View
     * road overlay should not appear (e.g. a non-Earth map type).
     */
    streetViewControl?: boolean|null;
    /**
     * The initial display options for the Street View Pegman control.
     */
    streetViewControlOptions?: google.maps.StreetViewControlOptions|null;
    /**
     * Styles to apply to each of the default map types. Note that for
     * <code>satellite</code>/<code>hybrid</code> and <code>terrain</code>
     * modes, these styles will only apply to labels and geometry.
     */
    styles?: google.maps.MapTypeStyle[]|null;
    /**
     * For vector maps, sets the angle of incidence of the map. The allowed
     * values are restricted depending on the zoom level of the map. For raster
     * maps, controls the automatic switching behavior for the angle of
     * incidence of the map. The only allowed values are <code>0</code> and
     * <code>45</code>. The value <code>0</code> causes the map to always use a
     * 0&deg; overhead view regardless of the zoom level and viewport. The value
     * <code>45</code> causes the tilt angle to automatically switch to 45
     * whenever 45&deg; imagery is available for the current zoom level and
     * viewport, and switch back to 0 whenever 45&deg; imagery is not available
     * (this is the default behavior). 45&deg; imagery is only available for
     * <code>satellite</code> and <code>hybrid</code> map types, within some
     * locations, and at some zoom levels. <b>Note:</b> <code>getTilt</code>
     * returns the current tilt angle, not the value specified by this option.
     * Because <code>getTilt</code> and this option refer to different things,
     * do not <code>bind()</code> the <code>tilt</code> property; doing so may
     * yield unpredictable effects.
     */
    tilt?: number|null;
    /**
     * The initial Map zoom level. Valid values: Integers between zero, and up
     * to the supported <a
     * href="https://developers.google.com/maps/documentation/javascript/maxzoom">maximum
     * zoom level</a>.
     */
    zoom?: number|null;
    /**
     * The enabled/disabled state of the Zoom control.
     */
    zoomControl?: boolean|null;
    /**
     * The display options for the Zoom control.
     */
    zoomControlOptions?: google.maps.ZoomControlOptions|null;
}
