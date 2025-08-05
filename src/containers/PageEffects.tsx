import s from "./RootPageStyles.module.css";
import {FloatItem} from "components/effects/FloatItem.tsx";
import {Wiggle} from "components/effects/Wiggle.tsx";
import FlexGrowPage from "components/effects/flex-grow-effect.tsx";
import {RunnerString} from "components/effects/runnerString/RunnerString.tsx";
import {Pulser} from "components/effects/pulser/Pulser.tsx";
import {ClipPath} from "components/effects/clip-path/ClipPath.tsx";

export function PageEffects() {

    return (
        <div className={s.root}>
            <div className={s.container}>
                <FloatItem/>
                <Wiggle/>
                <FlexGrowPage/>
                <RunnerString/>
                <Pulser/>
                <ClipPath/>
            </div>
        </div>
    );
}
