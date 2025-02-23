import Category from '../Models/categoryMd.js';
import catchAsync from '../Utils/catchAsync.js';
import ApiFeatures from '../Utils/apiFeatures.js';
// ... (existing code)

export const createCategory = catchAsync(async (req, res, next) => {
    const { title = null, icon = null } = req.body;
    if (!title && !icon) {
        return next(new HandleERROR('Please provide all data', 400));
    }

    const newCategory = await Category.create({ title, icon });
    return res.status(201).json({
        success: true,
        data: newCategory
    });
});

export const getCategories = catchAsync(async (req, res, next) => {
    const features = new (Category.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const categories = await ApiFeatures.query;
 
    return res.status(200).json({
        success: true,
        count: categories.length,
        data: categories
    });
});

export const getCategory = catchAsync(async (req, res, next) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        return next(new HandleERROR('Category not found', 404));
    }

    return res.status(200).json({
        success: true,
        data: category
    });
});

export const updateCategory = catchAsync(async (req, res, next) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!category) {
        return next(new HandleERROR('Category not found', 404));
    }

    return res.status(200).json({
        success: true,
        data: category
    });
});

export const deleteCategory = catchAsync(async (req, res, next) => {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
        return next(new HandleERROR('Category not found', 404));
    }

    return res.status(200).json({
        success: true,
        data: {}
    });
});