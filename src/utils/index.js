/**
 * @description 模块自动加载
 * @param modulesFiles 模块文件
 * @param isDefault 是否为默认导出 默认：true
 * @return objdect 模块集合
 */
export const moduleAutoImport = (modulesFiles, isDefault = true) => {
  return modulesFiles.keys().reduce((moduleMap, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    moduleMap[moduleName] = isDefault ? value.default : value;
    return moduleMap;
  }, {});
};

export const isObjectEmpty = obj => JSON.stringify(obj) === '{}';
