// TODO: migrate tests below to the builder

// import {usePlotConfig} from "../uPlot/hooks";
//
// describe('series config', () => {
//   it('should add series', async () => {
//     const { result } = renderHook(() => usePlotConfig(0, 0, 'browser'));
//     const addSeries = result.current.addSeries;
//
//     act(() => {
//       addSeries({
//         stroke: '#ff0000',
//       });
//     });
//
//     expect(result.current.currentConfig?.series).toHaveLength(2);
//     expect(result.current.currentConfig).toMatchInlineSnapshot(`
//         Object {
//           "axes": Array [],
//           "cursor": Object {
//             "focus": Object {
//               "prox": 30,
//             },
//           },
//           "focus": Object {
//             "alpha": 1,
//           },
//           "gutters": Object {
//             "x": 16,
//             "y": 8,
//           },
//           "height": 0,
//           "hooks": Object {},
//           "legend": Object {
//             "show": false,
//           },
//           "plugins": Array [],
//           "scales": Object {},
//           "series": Array [
//             Object {},
//             Object {
//               "stroke": "#ff0000",
//             },
//           ],
//           "tzDate": [Function],
//           "width": 0,
//         }
//       `);
//   });
//
//   it('should update series', async () => {
//     const { result } = renderHook(() => usePlotConfig(0, 0, 'browser'));
//     const addSeries = result.current.addSeries;
//
//     act(() => {
//       const { updateSeries } = addSeries({
//         stroke: '#ff0000',
//       });
//
//       updateSeries({
//         stroke: '#00ff00',
//       });
//     });
//
//     expect(result.current.currentConfig?.series).toHaveLength(2);
//     expect(result.current.currentConfig).toMatchInlineSnapshot(`
//         Object {
//           "axes": Array [],
//           "cursor": Object {
//             "focus": Object {
//               "prox": 30,
//             },
//           },
//           "focus": Object {
//             "alpha": 1,
//           },
//           "gutters": Object {
//             "x": 16,
//             "y": 8,
//           },
//           "height": 0,
//           "hooks": Object {},
//           "legend": Object {
//             "show": false,
//           },
//           "plugins": Array [],
//           "scales": Object {},
//           "series": Array [
//             Object {},
//             Object {
//               "stroke": "#00ff00",
//             },
//           ],
//           "tzDate": [Function],
//           "width": 0,
//         }
//       `);
//   });
//
//   it('should remove series', async () => {
//     const { result } = renderHook(() => usePlotConfig(0, 0, 'browser'));
//     const addSeries = result.current.addSeries;
//
//     act(() => {
//       const { removeSeries } = addSeries({
//         stroke: '#ff0000',
//       });
//
//       removeSeries();
//     });
//
//     expect(result.current.currentConfig?.series).toHaveLength(1);
//     expect(result.current.currentConfig).toMatchInlineSnapshot(`
//         Object {
//           "axes": Array [],
//           "cursor": Object {
//             "focus": Object {
//               "prox": 30,
//             },
//           },
//           "focus": Object {
//             "alpha": 1,
//           },
//           "gutters": Object {
//             "x": 16,
//             "y": 8,
//           },
//           "height": 0,
//           "hooks": Object {},
//           "legend": Object {
//             "show": false,
//           },
//           "plugins": Array [],
//           "scales": Object {},
//           "series": Array [
//             Object {},
//           ],
//           "tzDate": [Function],
//           "width": 0,
//         }
//       `);
//   });
// });
//
// describe('axis config', () => {
//   it('should add axis', async () => {
//     const { result } = renderHook(() => usePlotConfig(0, 0, 'browser'));
//     const addAxis = result.current.addAxis;
//
//     act(() => {
//       addAxis({
//         side: 1,
//       });
//     });
//
//     expect(result.current.currentConfig?.axes).toHaveLength(1);
//     expect(result.current.currentConfig).toMatchInlineSnapshot(`
//         Object {
//           "axes": Array [
//             Object {
//               "side": 1,
//             },
//           ],
//           "cursor": Object {
//             "focus": Object {
//               "prox": 30,
//             },
//           },
//           "focus": Object {
//             "alpha": 1,
//           },
//           "gutters": Object {
//             "x": 16,
//             "y": 8,
//           },
//           "height": 0,
//           "hooks": Object {},
//           "legend": Object {
//             "show": false,
//           },
//           "plugins": Array [],
//           "scales": Object {},
//           "series": Array [
//             Object {},
//           ],
//           "tzDate": [Function],
//           "width": 0,
//         }
//       `);
//   });
//
//   it('should update axis', async () => {
//     const { result } = renderHook(() => usePlotConfig(0, 0, 'browser'));
//     const addAxis = result.current.addAxis;
//
//     act(() => {
//       const { updateAxis } = addAxis({
//         side: 1,
//       });
//
//       updateAxis({
//         side: 3,
//       });
//     });
//
//     expect(result.current.currentConfig?.axes).toHaveLength(1);
//     expect(result.current.currentConfig).toMatchInlineSnapshot(`
//         Object {
//           "axes": Array [
//             Object {
//               "side": 3,
//             },
//           ],
//           "cursor": Object {
//             "focus": Object {
//               "prox": 30,
//             },
//           },
//           "focus": Object {
//             "alpha": 1,
//           },
//           "gutters": Object {
//             "x": 16,
//             "y": 8,
//           },
//           "height": 0,
//           "hooks": Object {},
//           "legend": Object {
//             "show": false,
//           },
//           "plugins": Array [],
//           "scales": Object {},
//           "series": Array [
//             Object {},
//           ],
//           "tzDate": [Function],
//           "width": 0,
//         }
//       `);
//   });
//
//   it('should remove axis', async () => {
//     const { result } = renderHook(() => usePlotConfig(0, 0, 'browser'));
//     const addAxis = result.current.addAxis;
//
//     act(() => {
//       const { removeAxis } = addAxis({
//         side: 1,
//       });
//
//       removeAxis();
//     });
//
//     expect(result.current.currentConfig?.axes).toHaveLength(0);
//     expect(result.current.currentConfig).toMatchInlineSnapshot(`
//         Object {
//           "axes": Array [],
//           "cursor": Object {
//             "focus": Object {
//               "prox": 30,
//             },
//           },
//           "focus": Object {
//             "alpha": 1,
//           },
//           "gutters": Object {
//             "x": 16,
//             "y": 8,
//           },
//           "height": 0,
//           "hooks": Object {},
//           "legend": Object {
//             "show": false,
//           },
//           "plugins": Array [],
//           "scales": Object {},
//           "series": Array [
//             Object {},
//           ],
//           "tzDate": [Function],
//           "width": 0,
//         }
//       `);
//   });
// });
//
// describe('scales config', () => {
//   it('should add scale', async () => {
//     const { result } = renderHook(() => usePlotConfig(0, 0, 'browser'));
//     const addScale = result.current.addScale;
//
//     act(() => {
//       addScale('x', {
//         time: true,
//       });
//     });
//
//     expect(Object.keys(result.current.currentConfig?.scales!)).toHaveLength(1);
//     expect(result.current.currentConfig).toMatchInlineSnapshot(`
//         Object {
//           "axes": Array [],
//           "cursor": Object {
//             "focus": Object {
//               "prox": 30,
//             },
//           },
//           "focus": Object {
//             "alpha": 1,
//           },
//           "gutters": Object {
//             "x": 16,
//             "y": 8,
//           },
//           "height": 0,
//           "hooks": Object {},
//           "legend": Object {
//             "show": false,
//           },
//           "plugins": Array [],
//           "scales": Object {
//             "x": Object {
//               "time": true,
//             },
//           },
//           "series": Array [
//             Object {},
//           ],
//           "tzDate": [Function],
//           "width": 0,
//         }
//       `);
//   });
//
//   it('should update scale', async () => {
//     const { result } = renderHook(() => usePlotConfig(0, 0, 'browser'));
//     const addScale = result.current.addScale;
//
//     act(() => {
//       const { updateScale } = addScale('x', {
//         time: true,
//       });
//
//       updateScale({
//         time: false,
//       });
//     });
//
//     expect(Object.keys(result.current.currentConfig?.scales!)).toHaveLength(1);
//     expect(result.current.currentConfig).toMatchInlineSnapshot(`
//         Object {
//           "axes": Array [],
//           "cursor": Object {
//             "focus": Object {
//               "prox": 30,
//             },
//           },
//           "focus": Object {
//             "alpha": 1,
//           },
//           "gutters": Object {
//             "x": 16,
//             "y": 8,
//           },
//           "height": 0,
//           "hooks": Object {},
//           "legend": Object {
//             "show": false,
//           },
//           "plugins": Array [],
//           "scales": Object {
//             "x": Object {
//               "time": false,
//             },
//           },
//           "series": Array [
//             Object {},
//           ],
//           "tzDate": [Function],
//           "width": 0,
//         }
//       `);
//   });
//
//   it('should remove scale', async () => {
//     const { result } = renderHook(() => usePlotConfig(0, 0, 'browser'));
//     const addScale = result.current.addScale;
//
//     act(() => {
//       const { removeScale } = addScale('x', {
//         time: true,
//       });
//
//       removeScale();
//     });
//
//     expect(Object.keys(result.current.currentConfig?.scales!)).toHaveLength(0);
//     expect(result.current.currentConfig).toMatchInlineSnapshot(`
//         Object {
//           "axes": Array [],
//           "cursor": Object {
//             "focus": Object {
//               "prox": 30,
//             },
//           },
//           "focus": Object {
//             "alpha": 1,
//           },
//           "gutters": Object {
//             "x": 16,
//             "y": 8,
//           },
//           "height": 0,
//           "hooks": Object {},
//           "legend": Object {
//             "show": false,
//           },
//           "plugins": Array [],
//           "scales": Object {},
//           "series": Array [
//             Object {},
//           ],
//           "tzDate": [Function],
//           "width": 0,
//         }
//       `);
//   });
// });