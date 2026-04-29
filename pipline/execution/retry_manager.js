const fs = require("fs");
const path = require("path");

// 경로 설정 (현재 스크립트 위치 기준)
const DATA_DIR = path.join(__dirname, "../../data/generated/danjong_tragedy_long");

// 파일 읽기 (scene_list 대신 우리가 만든 image_prompts.json 사용)
const sceneList = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "image_prompts.json"), "utf-8"));
const manifest = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "manifest.json"), "utf-8"));

const failedScenes = sceneList
  .filter(scene => manifest[scene.scene_id]?.status !== "success")
  .map(scene => ({
    scene_id: scene.scene_id,
    prompt: scene.prompt,
    attempt: (manifest[scene.scene_id]?.attempt || 0) + 1,
    reason: manifest[scene.scene_id]?.error || "not_success"
  }));

// 큐 파일 갱신
fs.writeFileSync(
  path.join(DATA_DIR, "retry_queue.json"),
  JSON.stringify(failedScenes, null, 2),
  "utf-8"
);